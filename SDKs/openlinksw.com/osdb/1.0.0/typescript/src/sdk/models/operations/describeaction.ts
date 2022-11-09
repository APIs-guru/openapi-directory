import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=actionId" })
  actionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class DescribeActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeActionPathParams;
}


export class DescribeActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeActionResponse?: shared.DescribeActionResponse;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
