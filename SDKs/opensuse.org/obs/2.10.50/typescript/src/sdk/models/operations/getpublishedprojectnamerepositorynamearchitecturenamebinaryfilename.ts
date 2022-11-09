import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=architecture_name" })
  architectureName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=binary_filename" })
  binaryFilename: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_name" })
  repositoryName: string;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams;

  @Metadata()
  security: GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity;
}


export class GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200ApplicationWildcardBinaryString?: Uint8Array;

  @Metadata()
  getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
