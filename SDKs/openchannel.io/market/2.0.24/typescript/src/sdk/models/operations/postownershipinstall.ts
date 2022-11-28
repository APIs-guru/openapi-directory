import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOwnershipInstallQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostOwnershipInstallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostOwnershipInstallQueryParams;
}


export class PostOwnershipInstallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
