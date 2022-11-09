import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeletePodcastByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePodcastByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class DeletePodcastByIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class DeletePodcastByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePodcastByIdPathParams;

  @Metadata()
  queryParams: DeletePodcastByIdQueryParams;

  @Metadata()
  headers: DeletePodcastByIdHeaders;
}


export class DeletePodcastByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePodcastResponse?: shared.DeletePodcastResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
