package shared

// Expr
// Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"
type Expr struct {
	Description *string `json:"description,omitempty"`
	Expression  *string `json:"expression,omitempty"`
	Location    *string `json:"location,omitempty"`
	Title       *string `json:"title,omitempty"`
}
