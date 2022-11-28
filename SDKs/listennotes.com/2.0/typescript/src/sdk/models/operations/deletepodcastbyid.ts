import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePodcastByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePodcastByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;
}


export class DeletePodcastByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class DeletePodcastByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePodcastByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePodcastByIdQueryParams;

  @SpeakeasyMetadata()
  headers: DeletePodcastByIdHeaders;
}


export class DeletePodcastByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletePodcastResponse?: shared.DeletePodcastResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
