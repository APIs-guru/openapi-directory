import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";



// LandlordMaintenanceCertificateModel
/** 
 * Maintenance Certificate
**/
export class LandlordMaintenanceCertificateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Due" })
  due?: Date;

  @SpeakeasyMetadata({ data: "json, name=Files", elemType: LettingsLandlordDocument })
  files?: LettingsLandlordDocument[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
