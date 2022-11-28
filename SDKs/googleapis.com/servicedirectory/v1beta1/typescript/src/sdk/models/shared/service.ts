import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// Service
/** 
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ServiceInput
/** 
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
**/
export class ServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
