package shared

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions struct {
	Sourceupdate *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource struct {
	Package *string
	Project *string
	Rev     *int64
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget struct {
	Package *string
	Project *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction struct {
	Options *OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions
	Source  *OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource
	Target  *OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget
	Type    *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory struct {
	Comment     *string
	Description *string
	When        *string
	Who         *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview1 struct {
	ByUser *string
	State  *string
	When   *string
	Who    *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview2 struct {
	ByGroup *string
	State   *string
	When    *string
	Who     *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview3 struct {
	ByProject *string
	State     *string
	When      *string
	Who       *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview4 struct {
	ByPackage *string
	State     *string
	When      *string
	Who       *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState struct {
	Comment *string
	Name    *string
	When    *string
	Who     *string
}

type OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8Schema struct {
	Action      *OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction
	Creator     *string
	Description *string
	History     []OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory
	ID          *int64
	Review      []interface{}
	State       *OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState
}
