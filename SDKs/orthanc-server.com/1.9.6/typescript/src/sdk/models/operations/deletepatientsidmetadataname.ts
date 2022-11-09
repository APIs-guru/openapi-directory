import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePatientsIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeletePatientsIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeletePatientsIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePatientsIdMetadataNamePathParams;

  @Metadata()
  headers: DeletePatientsIdMetadataNameHeaders;
}


export class DeletePatientsIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
