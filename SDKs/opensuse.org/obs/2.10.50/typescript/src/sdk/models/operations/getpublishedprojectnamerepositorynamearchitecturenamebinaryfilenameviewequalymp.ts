import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=binary_filename" })
  binaryFilename: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpPathParams;

  @SpeakeasyMetadata()
  security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpSecurity;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
