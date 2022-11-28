import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstitutionsDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=institution_id" })
  institutionId: string;
}


export class InstitutionsDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstitutionsDetailPathParams;
}


export class InstitutionsDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
