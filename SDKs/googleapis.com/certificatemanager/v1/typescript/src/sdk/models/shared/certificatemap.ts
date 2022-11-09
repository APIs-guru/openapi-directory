import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GclbTarget } from "./gclbtarget";


// CertificateMap
/** 
 * Defines a collection of certificate configurations.
**/
export class CertificateMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gclbTargets", elemType: shared.GclbTarget })
  gclbTargets?: GclbTarget[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
