from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfirmationOfFunds:
    r"""ConfirmationOfFunds
    JSON Request body for the \"Confirmation of funds service\".
    
    <table> 
    <tr> 
      <td>cardNumber</td> 
      <td>String </td>
      <td>Optional</td>
      <td>Card Number of the card issued by the PIISP. Should be delivered if available.</td>
    </tr>
    <tr>
      <td>account</td>
      <td> Account Reference</td>
      <td>Mandatory</td>
      <td>PSU's account number.</td>
    </tr>
    <tr>
      <td>payee</td>
      <td>Max70Text</td>
      <td>Optional</td>
      <td>The merchant where the card is accepted as an information to the PSU.</td>
    </tr>
    <tr>
      <td>instructedAmount</td>
      <td>Amount</td>
      <td>Mandatory</td>
      <td>Transaction amount to be checked within the funds check mechanism.</td>
    </tr>
    </table>
    
    """
    
    account: AccountReference16Ch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    instructed_amount: Amount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructedAmount') }})
    card_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardNumber') }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee') }})
    
