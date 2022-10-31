package operations

import (
"openapi/pkg/models/shared")

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams struct {
    ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
    BinaryFilename string `pathParam:"style=simple,explode=false,name=binary_filename"`
    ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
    RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
    
}

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest struct {
    PathParams GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenamePathParams 
    Security GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameSecurity 
    
}

type GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse struct {
    Body []byte 
    ContentType string 
    GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200ApplicationWildcardBinaryString []byte 
    GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename200TextXMLBinaryString []byte 
    StatusCode int64 
    
}

