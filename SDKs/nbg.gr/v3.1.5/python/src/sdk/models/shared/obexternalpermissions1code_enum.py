from dataclasses import dataclass, field
from typing import Enum

class ObExternalPermissions1CodeEnum(str, Enum):
    READ_ACCOUNTS_BASIC = "ReadAccountsBasic"
    READ_ACCOUNTS_DETAIL = "ReadAccountsDetail"
    READ_BALANCES = "ReadBalances"
    READ_BENEFICIARIES_BASIC = "ReadBeneficiariesBasic"
    READ_BENEFICIARIES_DETAIL = "ReadBeneficiariesDetail"
    READ_DIRECT_DEBITS = "ReadDirectDebits"
    READ_OFFERS = "ReadOffers"
    READ_PAN = "ReadPAN"
    READ_PARTY = "ReadParty"
    READ_PARTY_PSU = "ReadPartyPSU"
    READ_PRODUCTS = "ReadProducts"
    READ_SCHEDULED_PAYMENTS_BASIC = "ReadScheduledPaymentsBasic"
    READ_SCHEDULED_PAYMENTS_DETAIL = "ReadScheduledPaymentsDetail"
    READ_STANDING_ORDERS_BASIC = "ReadStandingOrdersBasic"
    READ_STANDING_ORDERS_DETAIL = "ReadStandingOrdersDetail"
    READ_STATEMENTS_BASIC = "ReadStatementsBasic"
    READ_STATEMENTS_DETAIL = "ReadStatementsDetail"
    READ_TRANSACTIONS_BASIC = "ReadTransactionsBasic"
    READ_TRANSACTIONS_CREDITS = "ReadTransactionsCredits"
    READ_TRANSACTIONS_DEBITS = "ReadTransactionsDebits"
    READ_TRANSACTIONS_DETAIL = "ReadTransactionsDetail"

