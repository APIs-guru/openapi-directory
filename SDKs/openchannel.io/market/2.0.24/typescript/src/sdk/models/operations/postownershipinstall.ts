import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOwnershipInstallQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelId" })
  modelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostOwnershipInstallRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostOwnershipInstallQueryParams;
}


export class PostOwnershipInstallResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
