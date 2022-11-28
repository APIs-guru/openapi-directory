import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Property
/** 
 * A key-value pair attached to a file that is either public or private to an application.
 * The following limits apply to file properties:  
 * - Maximum of 100 properties total per file
 * - Maximum of 30 private properties per app
 * - Maximum of 30 public properties
 * - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
**/
export class Property extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: string;
}
