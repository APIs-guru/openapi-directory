import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
export declare enum ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteFileConsentResponse4DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteFileConsentResponse4DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteFileConsentResponse4DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteFileConsentResponse4DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export declare class ObWriteFileConsentResponse4DataInitiation extends SpeakeasyBase {
    controlSum?: number;
    debtorAccount?: ObWriteFileConsentResponse4DataInitiationDebtorAccount;
    fileHash: string;
    fileReference?: string;
    fileType: string;
    localInstrument?: string;
    numberOfTransactions?: string;
    remittanceInformation?: ObWriteFileConsentResponse4DataInitiationRemittanceInformation;
    requestedExecutionDateTime?: Date;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteFileConsentResponse4DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    AwaitingUpload = "AwaitingUpload",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class ObWriteFileConsentResponse4Data extends SpeakeasyBase {
    authorisation?: ObWriteFileConsentResponse4DataAuthorisation;
    charges?: ObWriteFileConsentResponse4DataCharges[];
    consentId: string;
    creationDateTime: Date;
    cutOffDateTime?: Date;
    debtor?: ObCashAccountDebtor4;
    initiation: ObWriteFileConsentResponse4DataInitiation;
    scaSupportData?: ObscaSupportData1;
    status: ObWriteFileConsentResponse4DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteFileConsentResponse4 extends SpeakeasyBase {
    data: ObWriteFileConsentResponse4Data;
    links?: Links;
    meta?: Meta;
}
