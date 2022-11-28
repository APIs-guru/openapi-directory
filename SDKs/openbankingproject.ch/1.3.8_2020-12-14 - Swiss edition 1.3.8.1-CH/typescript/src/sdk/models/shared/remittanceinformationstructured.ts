import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RemittanceInformationStructuredScoRorQrRorIpiEnum {
    Scor = "SCOR",
    Qrr = "QRR",
    Ipi = "IPI"
}


// RemittanceInformationStructured
/** 
 * Structured remittance information.
 * 
**/
export class RemittanceInformationStructured extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SCORorQRRorIPI" })
  scoRorQrRorIpi?: RemittanceInformationStructuredScoRorQrRorIpiEnum;

  @SpeakeasyMetadata({ data: "json, name=additionalRemittanceInformation" })
  additionalRemittanceInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference: string;

  @SpeakeasyMetadata({ data: "json, name=referenceIssuer" })
  referenceIssuer?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceType" })
  referenceType?: string;
}
