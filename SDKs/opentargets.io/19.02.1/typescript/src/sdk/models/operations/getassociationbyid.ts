import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAssociationByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetAssociationByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociationByIdQueryParams;
}


export class GetAssociationByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
