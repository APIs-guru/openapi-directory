package shared

type Investigation struct {
	ChildDocuments   map[string]interface{} `json:"_childDocuments_"`
	Assay            *string                `json:"assay"`
	DocumentUUID     *string                `json:"document_uuid"`
	Effectendpoint   *string                `json:"effectendpoint"`
	Endpoint         *string                `json:"endpoint"`
	Endpointcategory *string                `json:"endpointcategory"`
	Err              *float64               `json:"err"`
	ErrQualifier     *string                `json:"errQualifier"`
	Guidance         *string                `json:"guidance"`
	Investigation    *string                `json:"investigation"`
	LoQualifier      *string                `json:"loQualifier"`
	LoValue          *float64               `json:"loValue"`
	Name             *string                `json:"name"`
	OwnerName        *string                `json:"owner_name"`
	Publicname       *string                `json:"publicname"`
	Reference        *string                `json:"reference"`
	ReferenceOwner   *string                `json:"reference_owner"`
	ReferenceYear    *string                `json:"reference_year"`
	Resulttype       *string                `json:"resulttype"`
	SUUID            *string                `json:"s_uuid"`
	StudyResultType  *string                `json:"studyResultType"`
	SubstanceType    *string                `json:"substanceType"`
	TextValue        *string                `json:"textValue"`
	Topcategory      *string                `json:"topcategory"`
	TypeS            *string                `json:"type_s"`
	Unit             *string                `json:"unit"`
	UpQualifier      *string                `json:"upQualifier"`
	UpValue          *float64               `json:"upValue"`
	Updated          *string                `json:"updated"`
}
