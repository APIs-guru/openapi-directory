import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreprintsCitationListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;
}


export class PreprintsCitationListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreprintsCitationListPathParams;
}


export class PreprintsCitationListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
