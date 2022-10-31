package operations

type PostPersonCmdEnum string

const (
	PostPersonCmdEnumRegister PostPersonCmdEnum = "register"
)

type PostPersonQueryParams struct {
	Cmd PostPersonCmdEnum `queryParam:"style=form,explode=true,name=cmd"`
}

type PostPersonRequest struct {
	QueryParams PostPersonQueryParams
	Request     []byte `request:"mediaType=application/xml"`
}

type PostPersonResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
