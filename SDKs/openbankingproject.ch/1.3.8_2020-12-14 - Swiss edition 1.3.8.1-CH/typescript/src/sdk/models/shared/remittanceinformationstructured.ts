import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RemittanceInformationStructuredScoRorQrRorIpiEnum {
    Scor = "SCOR"
,    Qrr = "QRR"
,    Ipi = "IPI"
}


// RemittanceInformationStructured
/** 
 * Structured remittance information.
 * 
**/
export class RemittanceInformationStructured extends SpeakeasyBase {
  @Metadata({ data: "json, name=SCORorQRRorIPI" })
  scoRorQrRorIpi?: RemittanceInformationStructuredScoRorQrRorIpiEnum;

  @Metadata({ data: "json, name=additionalRemittanceInformation" })
  additionalRemittanceInformation?: string;

  @Metadata({ data: "json, name=reference" })
  reference: string;

  @Metadata({ data: "json, name=referenceIssuer" })
  referenceIssuer?: string;

  @Metadata({ data: "json, name=referenceType" })
  referenceType?: string;
}
