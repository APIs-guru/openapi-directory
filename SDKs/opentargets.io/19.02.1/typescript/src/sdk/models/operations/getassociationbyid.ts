import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAssociationByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetAssociationByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociationByIdQueryParams;
}


export class GetAssociationByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
