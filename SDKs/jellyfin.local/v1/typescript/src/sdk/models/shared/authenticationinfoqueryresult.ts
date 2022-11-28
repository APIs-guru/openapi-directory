import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationInfo } from "./authenticationinfo";



export class AuthenticationInfoQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AuthenticationInfo })
  items?: AuthenticationInfo[];

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
