import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsProvidersGraphsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersGraphsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsProvidersGraphsPathParams;
}


export class CircuitsProvidersGraphsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  provider?: shared.Provider;

  @Metadata()
  statusCode: number;
}
