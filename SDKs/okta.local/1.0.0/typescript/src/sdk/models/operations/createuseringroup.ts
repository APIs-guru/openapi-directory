import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateUserInGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activate" })
  activate?: string;
}


export class CreateUserInGroupRequestBodyProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;
}


export class CreateUserInGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: CreateUserInGroupRequestBodyProfile;
}


export class CreateUserInGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateUserInGroupQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateUserInGroupRequestBody;
}


export class CreateUserInGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
