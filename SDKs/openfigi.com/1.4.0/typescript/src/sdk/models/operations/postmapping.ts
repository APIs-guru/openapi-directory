import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.MappingJob })
  request?: shared.MappingJob[];
}


export class PostMappingResponse extends SpeakeasyBase {
  @Metadata()
  bulkMappingJobResult?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  postMapping400WildcardString?: string;

  @Metadata()
  postMapping401WildcardString?: string;

  @Metadata()
  postMapping406WildcardString?: string;

  @Metadata()
  postMapping413WildcardString?: string;

  @Metadata()
  postMapping500WildcardString?: string;

  @Metadata()
  statusCode: number;
}
