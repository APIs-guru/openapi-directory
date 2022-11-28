import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains?: number[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=linodes" })
  linodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=nodebalancers" })
  nodebalancers?: number[];

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: number[];
}


export class CreateTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateTagDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateTagRequestBody;

  @SpeakeasyMetadata()
  security: CreateTagSecurity;
}


export class CreateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;

  @SpeakeasyMetadata()
  createTagDefaultApplicationJsonObject?: CreateTagDefaultApplicationJson;
}
