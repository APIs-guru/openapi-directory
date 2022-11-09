import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLifecycleOneToOneHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostLifecycleOneToOneRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  lifecycleOneToOneRequest?: shared.LifecycleOneToOneRequest;

  @Metadata({ data: "request, media_type=application/json" })
  lifecycleOneToOneRequest1?: shared.LifecycleOneToOneRequest;

  @Metadata({ data: "request, media_type=text/json" })
  lifecycleOneToOneRequest2?: shared.LifecycleOneToOneRequest;
}


export class PostLifecycleOneToOneRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostLifecycleOneToOneHeaders;

  @Metadata()
  request?: PostLifecycleOneToOneRequests;
}


export class PostLifecycleOneToOneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  planningLevelDataDto?: shared.PlanningLevelDataDto;

  @Metadata()
  statusCode: number;
}
