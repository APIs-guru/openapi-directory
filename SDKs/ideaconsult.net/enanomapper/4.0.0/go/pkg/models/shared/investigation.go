package shared



type Investigation struct {
    ChildDocuments map[string]interface{} `json:"_childDocuments_,omitempty"`
    Assay *string `json:"assay,omitempty"`
    DocumentUUID *string `json:"document_uuid,omitempty"`
    Effectendpoint *string `json:"effectendpoint,omitempty"`
    Endpoint *string `json:"endpoint,omitempty"`
    Endpointcategory *string `json:"endpointcategory,omitempty"`
    Err *float64 `json:"err,omitempty"`
    ErrQualifier *string `json:"errQualifier,omitempty"`
    Guidance *string `json:"guidance,omitempty"`
    Investigation *string `json:"investigation,omitempty"`
    LoQualifier *string `json:"loQualifier,omitempty"`
    LoValue *float64 `json:"loValue,omitempty"`
    Name *string `json:"name,omitempty"`
    OwnerName *string `json:"owner_name,omitempty"`
    Publicname *string `json:"publicname,omitempty"`
    Reference *string `json:"reference,omitempty"`
    ReferenceOwner *string `json:"reference_owner,omitempty"`
    ReferenceYear *string `json:"reference_year,omitempty"`
    Resulttype *string `json:"resulttype,omitempty"`
    SUUID *string `json:"s_uuid,omitempty"`
    StudyResultType *string `json:"studyResultType,omitempty"`
    SubstanceType *string `json:"substanceType,omitempty"`
    TextValue *string `json:"textValue,omitempty"`
    Topcategory *string `json:"topcategory,omitempty"`
    TypeS *string `json:"type_s,omitempty"`
    Unit *string `json:"unit,omitempty"`
    UpQualifier *string `json:"upQualifier,omitempty"`
    UpValue *float64 `json:"upValue,omitempty"`
    Updated *string `json:"updated,omitempty"`
    
}

