import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Namespace
/** 
 * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
**/
export class Namespace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// NamespaceInput
/** 
 * A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services.
**/
export class NamespaceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
