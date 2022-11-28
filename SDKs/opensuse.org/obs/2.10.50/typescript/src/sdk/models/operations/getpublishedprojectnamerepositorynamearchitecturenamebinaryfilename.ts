import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=binary_filename" })
  binaryFilename: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams;

  @SpeakeasyMetadata()
  security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200ApplicationWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
