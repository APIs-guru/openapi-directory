import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAdministrationUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PutAdministrationUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAdministrationUserHeaders;
}


export class PutAdministrationUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
