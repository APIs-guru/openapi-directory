import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLifecycleOneToOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostLifecycleOneToOneRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  lifecycleOneToOneRequest?: shared.LifecycleOneToOneRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  lifecycleOneToOneRequest1?: shared.LifecycleOneToOneRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  lifecycleOneToOneRequest2?: shared.LifecycleOneToOneRequest;
}


export class PostLifecycleOneToOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostLifecycleOneToOneHeaders;

  @SpeakeasyMetadata()
  request?: PostLifecycleOneToOneRequests;
}


export class PostLifecycleOneToOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  planningLevelDataDto?: shared.PlanningLevelDataDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
