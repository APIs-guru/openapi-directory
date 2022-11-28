import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Expr
/** 
 * Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"
**/
export class Expr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
