import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RemittanceInformationStructuredScoRorQrRorIpiEnum {
    Scor = "SCOR",
    Qrr = "QRR",
    Ipi = "IPI"
}
/**
 * Structured remittance information.
 *
**/
export declare class RemittanceInformationStructured extends SpeakeasyBase {
    scoRorQrRorIpi?: RemittanceInformationStructuredScoRorQrRorIpiEnum;
    additionalRemittanceInformation?: string;
    reference: string;
    referenceIssuer?: string;
    referenceType?: string;
}
