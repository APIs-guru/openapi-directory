import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreprintsCitationListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=preprint_id" })
  preprintId: string;
}


export class PreprintsCitationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreprintsCitationListPathParams;
}


export class PreprintsCitationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
