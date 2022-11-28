import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLifecycleManyToOneHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostLifecycleManyToOneRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  lifecycleManyToOneRequest?: shared.LifecycleManyToOneRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  lifecycleManyToOneRequest1?: shared.LifecycleManyToOneRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  lifecycleManyToOneRequest2?: shared.LifecycleManyToOneRequest;
}


export class PostLifecycleManyToOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostLifecycleManyToOneHeaders;

  @SpeakeasyMetadata()
  request?: PostLifecycleManyToOneRequests;
}


export class PostLifecycleManyToOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  planningLevelDataDto?: shared.PlanningLevelDataDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
