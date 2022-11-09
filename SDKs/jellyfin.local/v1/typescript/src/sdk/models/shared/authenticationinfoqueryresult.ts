import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthenticationInfo } from "./authenticationinfo";


export class AuthenticationInfoQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.AuthenticationInfo })
  items?: AuthenticationInfo[];

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
