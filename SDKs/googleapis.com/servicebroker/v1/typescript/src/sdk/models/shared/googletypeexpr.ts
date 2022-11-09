import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleTypeExpr
/** 
 * Represents an expression text. Example:
 * 
 *     title: "User account presence"
 *     description: "Determines whether the request has a user account"
 *     expression: "size(request.user) > 0"
**/
export class GoogleTypeExpr extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
