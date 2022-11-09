import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isDisabled" })
  isDisabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isHidden" })
  isHidden?: boolean;
}


export class GetUsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersQueryParams;

  @Metadata()
  security: GetUsersSecurity;
}


export class GetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserDto })
  userDtos?: shared.UserDto[];
}
