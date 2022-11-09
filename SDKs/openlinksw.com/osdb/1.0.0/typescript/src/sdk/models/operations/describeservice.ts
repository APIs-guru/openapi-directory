import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class DescribeServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeServicePathParams;
}


export class DescribeServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeServiceResponse?: shared.DescribeServiceResponse;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
