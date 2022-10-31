package shared




type ReplaceImageRequestImageReplaceMethodEnum string

const (
    ReplaceImageRequestImageReplaceMethodEnumImageReplaceMethodUnspecified ReplaceImageRequestImageReplaceMethodEnum = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
ReplaceImageRequestImageReplaceMethodEnumCenterInside ReplaceImageRequestImageReplaceMethodEnum = "CENTER_INSIDE"
ReplaceImageRequestImageReplaceMethodEnumCenterCrop ReplaceImageRequestImageReplaceMethodEnum = "CENTER_CROP"
)


type ReplaceImageRequest struct {
    ImageObjectID *string `json:"imageObjectId,omitempty"`
    ImageReplaceMethod *ReplaceImageRequestImageReplaceMethodEnum `json:"imageReplaceMethod,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

