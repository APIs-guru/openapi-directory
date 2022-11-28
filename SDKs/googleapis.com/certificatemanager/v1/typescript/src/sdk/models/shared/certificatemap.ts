import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GclbTarget } from "./gclbtarget";



// CertificateMap
/** 
 * Defines a collection of certificate configurations.
**/
export class CertificateMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gclbTargets", elemType: GclbTarget })
  gclbTargets?: GclbTarget[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// CertificateMapInput
/** 
 * Defines a collection of certificate configurations.
**/
export class CertificateMapInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
