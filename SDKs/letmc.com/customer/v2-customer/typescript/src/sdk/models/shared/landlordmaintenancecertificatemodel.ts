import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";


// LandlordMaintenanceCertificateModel
/** 
 * Maintenance Certificate
**/
export class LandlordMaintenanceCertificateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Due" })
  due?: Date;

  @Metadata({ data: "json, name=Files", elemType: shared.LettingsLandlordDocument })
  files?: LettingsLandlordDocument[];

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
