import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.MappingJob })
  request?: shared.MappingJob[];
}


export class PostMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkMappingJobResult?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postMapping400WildcardString?: string;

  @SpeakeasyMetadata()
  postMapping401WildcardString?: string;

  @SpeakeasyMetadata()
  postMapping406WildcardString?: string;

  @SpeakeasyMetadata()
  postMapping413WildcardString?: string;

  @SpeakeasyMetadata()
  postMapping500WildcardString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
