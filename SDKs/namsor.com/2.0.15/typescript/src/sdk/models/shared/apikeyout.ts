import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiKeyOut
/** 
 * The API Key.
**/
export class ApiKeyOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=anonymized" })
  anonymized?: boolean;

  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=corporate" })
  corporate?: boolean;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=learnable" })
  learnable?: boolean;

  @Metadata({ data: "json, name=partner" })
  partner?: boolean;

  @Metadata({ data: "json, name=striped" })
  striped?: boolean;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=vetted" })
  vetted?: boolean;
}
