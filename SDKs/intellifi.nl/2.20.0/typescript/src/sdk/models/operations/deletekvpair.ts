import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteKvPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteKvPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteKvPairPathParams;
}


export class DeleteKvPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
