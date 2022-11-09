import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLifecycleManyToOneHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostLifecycleManyToOneRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  lifecycleManyToOneRequest?: shared.LifecycleManyToOneRequest;

  @Metadata({ data: "request, media_type=application/json" })
  lifecycleManyToOneRequest1?: shared.LifecycleManyToOneRequest;

  @Metadata({ data: "request, media_type=text/json" })
  lifecycleManyToOneRequest2?: shared.LifecycleManyToOneRequest;
}


export class PostLifecycleManyToOneRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostLifecycleManyToOneHeaders;

  @Metadata()
  request?: PostLifecycleManyToOneRequests;
}


export class PostLifecycleManyToOneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  planningLevelDataDto?: shared.PlanningLevelDataDto;

  @Metadata()
  statusCode: number;
}
