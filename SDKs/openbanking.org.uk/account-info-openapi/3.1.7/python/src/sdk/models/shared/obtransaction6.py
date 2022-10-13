from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount_9
from . import obtransactioncashbalance
from . import obbanktransactioncodestructure1
from . import obtransactioncardinstrument1
from . import obactiveorhistoriccurrencyandamount_10
from . import obcreditdebitcode_1_enum
from . import obcashaccount6_0
from . import obbranchandfinancialinstitutionidentification6_1
from . import obcurrencyexchange5
from . import obcashaccount6_1
from . import obbranchandfinancialinstitutionidentification6_2
from . import obmerchantdetails1
from . import proprietarybanktransactioncodestructure1
from . import obentrystatus1code_enum
from . import obtransactionmutability1code_enum


@dataclass_json
@dataclass
class ObTransaction6:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    address_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine' }})
    amount: obactiveorhistoriccurrencyandamount_9.ObActiveOrHistoricCurrencyAndAmount9 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    balance: Optional[obtransactioncashbalance.ObTransactionCashBalance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Balance' }})
    bank_transaction_code: Optional[obbanktransactioncodestructure1.ObBankTransactionCodeStructure1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankTransactionCode' }})
    booking_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BookingDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    card_instrument: Optional[obtransactioncardinstrument1.ObTransactionCardInstrument1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CardInstrument' }})
    charge_amount: Optional[obactiveorhistoriccurrencyandamount_10.ObActiveOrHistoricCurrencyAndAmount10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeAmount' }})
    credit_debit_indicator: obcreditdebitcode_1_enum.ObCreditDebitCode1Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditDebitIndicator' }})
    creditor_account: Optional[obcashaccount6_0.ObCashAccount60] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[obbranchandfinancialinstitutionidentification6_1.ObBranchAndFinancialInstitutionIdentification61] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    currency_exchange: Optional[obcurrencyexchange5.ObCurrencyExchange5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyExchange' }})
    debtor_account: Optional[obcashaccount6_1.ObCashAccount61] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    debtor_agent: Optional[obbranchandfinancialinstitutionidentification6_2.ObBranchAndFinancialInstitutionIdentification62] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAgent' }})
    merchant_details: Optional[obmerchantdetails1.ObMerchantDetails1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MerchantDetails' }})
    proprietary_bank_transaction_code: Optional[proprietarybanktransactioncodestructure1.ProprietaryBankTransactionCodeStructure1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProprietaryBankTransactionCode' }})
    statement_reference: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementReference' }})
    status: obentrystatus1code_enum.ObEntryStatus1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionId' }})
    transaction_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionInformation' }})
    transaction_mutability: Optional[obtransactionmutability1code_enum.ObTransactionMutability1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionMutability' }})
    transaction_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionReference' }})
    value_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
